import React from 'react';
import PropTypes from 'prop-types';

class NotificationItem extends React.Component {
  render() {
    const { type, html, value, markNotificationAsRead, id } = this.props;
    
    if (html) {
      return (
        <li
          data-notification-type={type}
          dangerouslySetInnerHTML={html}
          onClick={() => markNotificationAsRead(id)}
        />
      );
    }
    
    return (
      <li
        data-notification-type={type}
        onClick={() => markNotificationAsRead(id)}
      >
        {value}
      </li>
    );
  }
}

NotificationItem.propTypes = {
  id: PropTypes.number.isRequired,
  type: PropTypes.string,
  html: PropTypes.shape({
    __html: PropTypes.string
  }),
  value: PropTypes.string,
  markNotificationAsRead: PropTypes.func
};

NotificationItem.defaultProps = {
  type: 'default',
  markNotificationAsRead: () => {}
};

export default React.memo(NotificationItem);
