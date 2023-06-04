import Toast from 'react-bootstrap/Toast';

export const Comment = () => {
    return (
        <Toast>
            <Toast.Header closeButton={false}>
                <strong className="me-auto">Bootstrap</strong>
            </Toast.Header>
            <Toast.Body>Hello, world! This is a toast message.</Toast.Body>
        </Toast>
    );
};
