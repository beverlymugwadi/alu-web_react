import React from 'react';
import { StyleSheet, css } from 'aphrodite';
import NotificationItem from './NotificationItem';

const styles = StyleSheet.create({
  notifications: {
    padding: '20px',
    backgroundColor: '#f8f9fa',
    borderBottom: '2px solid #e0e0e0'
  }
});

class Notifications extends React.Component {
  constructor(props) {
    super(props);
    this.markAsRead = this.markAsRead.bind(this);
  }

  markAsRead(id) {
    console.log(`Notification ${id} has been marked as read`);
  }

  shouldComponentUpdate(nextProps) {
    const currentLength = this.props.listNotifications ? this.props.listNotifications.length : 0;
    const nextLength = nextProps.listNotifications ? nextProps.listNotifications.length : 0;
    return nextLength > currentLength;
  }

  render() {
    return (
      <div className={css(styles.notifications)}>
        <p>Here is the list of notifications</p>
        <ul>
          <NotificationItem
            id={1}
            type="default"
            value="New course available"
            markAsRead={this.markAsRead}
          />
          <NotificationItem
            id={2}
            type="urgent"
            value="New resume available"
            markAsRead={this.markAsRead}
          />
          <NotificationItem
            id={3}
            type="urgent"
            html={{ __html: '<strong>Urgent requirement</strong> - complete by EOD' }}
            markAsRead={this.markAsRead}
          />
        </ul>
      </div>
    );
  }
}

export default Notifications;
