import React from "react";

export function PhishingList({ phishingList }) {
  return (
    <div className="phishing-list-container">
      {phishingList.length > 0 && (
        <div>
          <h2>Phishing Entries</h2>
          <table>
            <thead>
              <tr>
                <th>Text</th>
                <th>Email</th>
                <th>Status</th>
                <th>Created At</th>
                <th>Updated At</th>
              </tr>
            </thead>
            <tbody>
              {phishingList.map((data) => (
                <Phishing data={data} key={data._id} />
              ))}
            </tbody>
          </table>
        </div>
      )}
    </div>
  );
}

function Phishing({ data }) {
  const statusColor = data.status === "clicked" ? "red" : "inherit";
  const rowStyle = {
    color: statusColor,
  };

  return (
    <tr style={rowStyle}>
      <td>{data.text}</td>
      <td>{data.to}</td>
      <td>{data.status}</td>
      <td>{new Date(data.createdAt).toLocaleString()}</td>
      <td>{new Date(data.updatedAt).toLocaleString()}</td>
    </tr>
  );
}

