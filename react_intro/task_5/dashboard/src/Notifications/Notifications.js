import './Notifications.css';

export default function Notifications() {
  return (
    <div className="Notifications">
      <p>Here is the list of notifications</p>
      <ul>
        <li data-priority="default">New course available</li>
        <li data-priority="urgent">New resume available</li>
        <li dangerouslySetInnerHTML={{ __html: '<strong>Urgent requirement</strong> - complete by EOD' }} />
      </ul>
    </div>
  );
}
