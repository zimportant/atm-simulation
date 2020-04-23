import React from 'react';

interface NotificationItem {
  icon: any;
  title: string;
}

const NotificationAppBarItem: React.FC<NotificationItem> = ({ icon, title }: NotificationItem) => {
  return <div />;
};

export default NotificationAppBarItem;
