import tmi from 'tmi.js';

class TwitchService {
  constructor() {
    this.client = null;
    this.accessToken = null;
    this.channelName = null;
    this.messageHandler = null;
  }

  static handleCallback(hash) {
    if (!hash) return null;
    const params = new URLSearchParams(hash.substring(1));
    const accessToken = params.get('access_token');
    if (accessToken) {
      localStorage.setItem('twitch_access_token', accessToken);
      return accessToken;
    }
    return null;
  }

  getAuthUrl() {
    const clientId = import.meta.env.VITE_TWITCH_CLIENT_ID;
    const redirectUri = import.meta.env.VITE_TWITCH_REDIRECT_URI;
    const scopes = 'chat:read chat:edit';

    return `https://id.twitch.tv/oauth2/authorize?client_id=${clientId}&redirect_uri=${encodeURIComponent(redirectUri)}&response_type=token&scope=${encodeURIComponent(scopes)}`;
  }

  async connectToChat(channelName, onMessage) {
    this.channelName = channelName;
    this.messageHandler = onMessage;
    this.accessToken = localStorage.getItem('twitch_access_token');

    if (!this.accessToken) {
      throw new Error('No access token found');
    }

    const clientOptions = {
      options: { debug: true },
      identity: {
        username: await this.getUserInfo(),
        password: `oauth:${this.accessToken}`
      },
      channels: [channelName]
    };

    this.client = new tmi.Client(clientOptions);

    this.client.on('message', (channel, tags, message, self) => {
      if (self) return;
      const chatMessage = {
        username: tags['display-name'],
        message: message,
        timestamp: new Date(),
        id: tags.id,
        color: tags.color || '#FFFFFF',
        badges: tags.badges || {}
      };
      this.messageHandler(chatMessage);
    });

    try {
      await this.client.connect();
      return true;
    } catch (error) {
      console.error('Failed to connect to chat:', error);
      throw error;
    }
  }

  async getUserInfo() {
    try {
      const response = await fetch('https://api.twitch.tv/helix/users', {
        headers: {
          'Authorization': `Bearer ${this.accessToken}`,
          'Client-Id': import.meta.env.VITE_TWITCH_CLIENT_ID
        }
      });
      const data = await response.json();
      return data.data[0].login;
    } catch (error) {
      console.error('Failed to get user info:', error);
      throw error;
    }
  }

  disconnect() {
    if (this.client) {
      this.client.disconnect();
      this.client = null;
      this.channelName = null;
      this.messageHandler = null;
    }
  }

  isConnected() {
    return this.client && this.client.readyState() === 'OPEN';
  }
}

export default new TwitchService();