import useModal from '@/hooks/useModal';
import Modal from '../../components/Modal';

function Fill() {
	const { hideModal } = useModal();

	return (
		<Modal>
			<div className="header">This is a full-width modal with a title</div>
			<div className="body">
				<p>And here is all its contents.</p>
				<button type="button" className="btn js-close-modal" onClick={hideModal}>
					Close
				</button>
			</div>
		</Modal>
	);
}

export default Fill;
