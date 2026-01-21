import React from 'react';
import { StyleSheet, css } from 'aphrodite';
import NotificationItem from './NotificationItem';

const styles = StyleSheet.create({
  notifications: {
    padding: '20px',
    backgroundColor: '#f8f9fa',
    borderBottom: '2px solid #e0e0e0',
    '@media (max-width: 900px)': {
      position: 'fixed',
      top: 0,
      left: 0,
      right: 0,
      bottom: 0,
      width: '100%',
      height: '100%',
      padding: 0,
      backgroundColor: '#f8f9fa',
      zIndex: 1000
    }
  },
  text: {
    fontSize: '20px',
    '@media (max-width: 900px)': {
      fontSize: '20px'
    }
  },
  list: {
    listStyle: 'none',
    padding: 0,
    margin: 0,
    '@media (max-width: 900px)': {
      padding: 0
    }
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
        <p className={css(styles.text)}>Here is the list of notifications</p>
        <ul className={css(styles.list)}>
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
