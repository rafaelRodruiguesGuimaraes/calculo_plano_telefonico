import { configure, shallow, EnzymeAdapter } from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';

configure({ adapter: new Adapter() });
export { shallow }
export default EnzymeAdapter;
