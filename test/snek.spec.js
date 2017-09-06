import Background from '../client/components/Background.jsx';


describe('Background unit tests: ', () => {
  describe('render tests', () => {
    it ('should render Background component', () => {
      const wrapper = shallow(<Background />);
      expect(wrapper.text()).to.eq('Hello from Background component. Props here: ');
    });
    it ('should pass down props', () => {
      const wrapper = shallow(<Background test='props here' />);
      expect(wrapper.text()).to.eq('Hello from Background component. Props here: props here');
    });
  });
});
