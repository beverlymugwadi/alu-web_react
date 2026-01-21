import React from 'react';
import PropTypes from 'prop-types';
import { StyleSheet, css } from 'aphrodite';

const styles = StyleSheet.create({
  default: {
    padding: '10px 8px',
    borderBottom: '1px solid #000',
    fontSize: '20px',
    '@media (max-width: 900px)': {
      width: '100%',
      padding: '10px 8px',
      borderBottom: '1px solid #000',
      fontSize: '20px'
    }
  },
  urgent: {
    padding: '10px 8px',
    borderBottom: '1px solid #000',
    fontSize: '20px',
    backgroundColor: '#f8d7da',
    '@media (max-width: 900px)': {
      width: '100%',
      padding: '10px 8px',
      borderBottom: '1px solid #000',
      fontSize: '20px'
    }
  }
});

class NotificationItem extends React.Component {
  render() {
    const { type, html, value, markAsRead, id } = this.props;
    const style = type === 'urgent' ? styles.urgent : styles.default;
    
    if (html) {
      return (
        <li
          className={css(style)}
          data-notification-type={type}
          dangerouslySetInnerHTML={html}
          onClick={() => markAsRead(id)}
        />
      );
    }
    
    return (
      <li
        className={css(style)}
        data-notification-type={type}
        onClick={() => markAsRead(id)}
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
  markAsRead: PropTypes.func
};

NotificationItem.defaultProps = {
  type: 'default',
  markAsRead: () => {}
};

export default React.memo(NotificationItem);
