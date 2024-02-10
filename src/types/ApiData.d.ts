export type ApiData = {
  id: {
    videoId: string;
    channelId: string;
  };
  snippet: {
    title: string;
    channelTitle: string;
    channelId: string;
    thumbnails: {
      high: {
        url: string;
      };
    };
  };
  statistics: {
    viewCount: string;
    likeCount: string;
    subscriberCount: string;
    hiddenSubscriberCount: boolean;
    videoCount: string;
  };
  brandingSettings?: {
    image: {
      bannerExternalUrl: string;
    };
  };
};
