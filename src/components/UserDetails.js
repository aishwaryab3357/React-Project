import { useEffect, useState } from "react";

function UserDetails({ id }) {
  const [profile, setProfile] = useState(null);

  useEffect(() => {
    fetch(`https://jsonplaceholder.typicode.com/users/${id}`)
      .then((res) => res.json())
      .then((data) => setProfile(data));
  }, [id]);

  if (!profile) return <p>Loading...</p>;

  return (
    <div style={{ padding: "20px", border: "1px solid #ccc", width: "400px" }}>
      <h2>User Details (ID: {profile.id})</h2>
      <p><strong>Name:</strong> {profile.name}</p>
      <p><strong>Username:</strong> {profile.username}</p>
      <p><strong>Email:</strong> {profile.email}</p>
      <p><strong>Phone:</strong> {profile.phone}</p>
      <p><strong>Website:</strong> {profile.website}</p>

      <h3>Address</h3>
      <p>{profile.address.street}, {profile.address.suite}</p>
      <p>{profile.address.city} - {profile.address.zipcode}</p>
      <p>Lat: {profile.address.geo.lat}, Lng: {profile.address.geo.lng}</p>

      <h3>Company</h3>
      <p><strong>Name:</strong> {profile.company.name}</p>
      <p><strong>Catch Phrase:</strong> {profile.company.catchPhrase}</p>
      <p><strong>BS:</strong> {profile.company.bs}</p>
    </div>
  );
}

export default UserDetails;
