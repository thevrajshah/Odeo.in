import { useContext, useState } from 'react';
import { Container, Row, Col, ListGroup, Button, Badge } from 'react-bootstrap';
import Context from '../../Context';
import { PasswordModal, UpdateProfile } from '../../components'

const Profile = () => {
	const { user, setPswdModal }: any = useContext(Context)

	return (
		<><Container>
			<div className="section-title">
				<h2>Profile</h2>
			</div>
			<Row>
				<Col lg='3' xs='12'>
					<ListGroup className='my-2'>
						<ListGroup.Item><b>Onboarding Process</b></ListGroup.Item>
						<StatusListItem verified={user.verification.phone}
						>Profile
						</StatusListItem>
						<StatusListItem verified={user.verification.email}
						>Email
						</StatusListItem>
						<StatusListItem verified={user.verification.phone}
						>Phone
						</StatusListItem>
						<ListGroup.Item></ListGroup.Item>
					</ListGroup>
					<Button onClick={() => setPswdModal(true)}>
						Change Password
					</Button>
				</Col>
				<Col lg='9' xs='12'>
					<UpdateProfile />
				</Col>
			</Row>
		</Container>
			<PasswordModal /></>
	);
};

Profile.layout = 'MINIMAL';
export default Profile;

const StatusListItem = ({ verified, children }: any) => {

	return (
		<ListGroup.Item><Badge bg={verified ? 'success' : 'danger'}>{verified ? 'VERIFIED' : 'NOT VERIFIED'}</Badge>&nbsp;{children}</ListGroup.Item>

	)
}