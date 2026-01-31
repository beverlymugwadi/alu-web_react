import React from 'react';
import PropTypes from 'prop-types';
import NotificationItem from './NotificationItem';
import './Notifications.css';

class Notifications extends React.PureComponent {
  render() {
    const { displayDrawer, handleDisplayDrawer, handleHideDrawer, listNotifications, markNotificationAsRead } = this.props;
    
    return (
      <div className="Notifications">
        <p onClick={handleDisplayDrawer}>Your notifications</p>
        {displayDrawer && (
          <>
            <button onClick={handleHideDrawer}>
              &times;
            </button>
            <ul>
              {listNotifications && listNotifications.length > 0 ? (
                listNotifications.map(notification => (
                  <NotificationItem
                    key={notification.id}
                    id={notification.id}
                    type={notification.type}
                    value={notification.value}
                    html={notification.html}
                    markNotificationAsRead={markNotificationAsRead}
                  />
                ))
              ) : null}
            </ul>
          </>
        )}
      </div>
    );
  }
}

Notifications.propTypes = {
  displayDrawer: PropTypes.bool,
  handleDisplayDrawer: PropTypes.func,
  handleHideDrawer: PropTypes.func,
  listNotifications: PropTypes.arrayOf(PropTypes.shape({
    id: PropTypes.number.isRequired,
    type: PropTypes.string,
    value: PropTypes.string,
    html: PropTypes.shape({
      __html: PropTypes.string
    })
  })),
  markNotificationAsRead: PropTypes.func
};

Notifications.defaultProps = {
  displayDrawer: false,
  handleDisplayDrawer: () => {},
  handleHideDrawer: () => {},
  listNotifications: [],
  markNotificationAsRead: () => {}
};

export default Notifications;
