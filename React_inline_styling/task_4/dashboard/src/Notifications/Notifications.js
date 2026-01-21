import React from 'react';
import { StyleSheet, css } from 'aphrodite';
import NotificationItem from './NotificationItem';

// Animation frames for opacity
const fadeInAnimation = {
  '0%': {
    opacity: 0.5
  },
  '100%': {
    opacity: 1
  }
};

// Animation frames for bounce
const bounceAnimation = {
  '0%': {
    transform: 'translateY(0px)'
  },
  '50%': {
    transform: 'translateY(-5px)'
  },
  '100%': {
    transform: 'translateY(5px)'
  }
};

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
  notificationsMenuButton: {
    position: 'fixed',
    right: '20px',
    top: '20px',
    padding: '10px 20px',
    backgroundColor: '#fff8f8',
    border: '1px solid #e0e0e0',
    borderRadius: '4px',
    cursor: 'pointer',
    zIndex: 999,
    ':hover': {
      animation: `${fadeInAnimation} 1s ease-in-out 3, ${bounceAnimation} 0.5s ease-in-out 3`
    },
    '@media (max-width: 900px)': {
      display: 'none'
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
    this.state = {
      isOpen: false
    };
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
      <>
        <button className={css(styles.notificationsMenuButton)}>
          Your notifications
        </button>
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
      </>
    );
  }
}

export default Notifications;
