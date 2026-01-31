import React from 'react';
import PropTypes from 'prop-types';
import NotificationItem from './NotificationItem';
import './Notifications.css';

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
    const displayerChanged = nextProps.displayDrawer !== this.props.displayDrawer;
    return nextLength > currentLength || displayerChanged;
  }

  render() {
    const { displayDrawer, handleDisplayDrawer, handleHideDrawer } = this.props;
    
    return (
      <div className="Notifications">
        <p onClick={handleDisplayDrawer}>Your notifications</p>
        {displayDrawer && (
          <>
            <button onClick={handleHideDrawer}>
              &times;
            </button>
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
    id: PropTypes.number,
    type: PropTypes.string,
    value: PropTypes.string
  }))
};

Notifications.defaultProps = {
  displayDrawer: false,
  handleDisplayDrawer: () => {},
  handleHideDrawer: () => {},
  listNotifications: []
};

export default Notifications;
