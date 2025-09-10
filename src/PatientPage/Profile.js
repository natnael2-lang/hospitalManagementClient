import './Profile.css';
import Navbarp from './NavBarp';
function Profile() {
    return (
        <> <Navbarp/>
        <div className='pro'>
            <div className="profile">
                <div className="photo">
                    <img
                        src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTd-odagfgTkIJAJFY0UmNVAxC_pemR52Czyg&s"
                        alt="image" />
                    <label for="input-file">Change Photo</label>
                    <input type="file" accept="image/jpeg, image/png, image/jpg" id="input-file"></input>
                </div>
                <div className="info">
                    <h2>Personal Information</h2>
                    <p>First Name:</p>
                    <p>Last Name:</p>
                    <p>ID:</p>
                    <p>Gender:</p>
                    <p>Date of Birth:</p>
                    <p>Registration Date:</p>
                    <h2>Address</h2>
                    <p>Phone Number:</p>
                    <p>Email:</p>
                    <p>Emergency Contact:</p>
                    <p>Street Address:</p>
                    <p>Street Address line 2:</p>
                </div>
            </div>
            </div>
            </>
    );
};
export default Profile