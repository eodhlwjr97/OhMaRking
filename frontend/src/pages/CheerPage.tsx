import styles from './CheerPage.module.scss';
import OMR from '../components/cheer/OMR';

function CheerPage(): JSX.Element {
  return (
    <div className="container">
      <OMR />
    </div>
  );
}

export default CheerPage;