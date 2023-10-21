import { withLayout } from '@/components/layout/withLayout';
import Calendar from './components/Calendar';

function ListPage() {
	return <Calendar />;
}

export default withLayout({ footer: true })(ListPage);
