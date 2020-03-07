import React from 'react';
import PropTypes from 'prop-types';
import View from '@vkontakte/vkui/dist/components/View/View';
import bridge from '@vkontakte/vk-bridge';

import { PopoutWrapper, ConfigProvider, Panel, PanelHeader, Div , Button , Footer, View , ScreenSpinner , ModalPage , ModalCard , ModalRoot , PanelHeaderButton , ModalPageHeader
	, List , Cell , CellButton , InfoRow , Progress , Gallery , Counter , FormLayout , Input , Placeholder , Snackbar , Avatar , Group , Alert, Epic, Tabbar, TabbarItem, Card, CardGrid, Link
	, Tooltip , Tabs , TabsItem, platform, IOS  } from '@vkontakte/vkui';

class Home extends React.Component {
	
	constructor(props) {
		super(props);
	
		this.state = {
			activePanel: 'main'
		};

		this.componentDidMount = this.componentDidMount.bind(this);
	}
	
	componentDidMount () {

	}

	render() {
		return (
		<View activePanel={"panel"}>
			<Panel id="panel">
				<PanelHeader>Шахта</PanelHeader>
			</Panel>
		</View>
		);
	}
}

Home.propTypes = {
	id: PropTypes.string.isRequired,
	go: PropTypes.func.isRequired,
};

export default Home;
