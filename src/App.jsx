import Atributes from "./components/atributes/Atributes";
import Button from "./components/button/Button";
import Information from "./components/information/Information";
import Progress from "./components/progress/Progress";
import Result from "./components/result/Result";
import Stats from "./components/stats/Stats";
import StatsTitle from "./components/statstitle/StatsTitle";
import Subtitle from "./components/subtitle/Subtitle";
import Summary from "./components/summary/Summary";
import Title from "./components/title/Title";

const App = () => {
	return <Summary>
		<Result>
			<Title text='Your Result' />
			<Progress number={76} />
			<Subtitle text='Great' />
			<Information text='Your performance exceed 65% of the people conducting the test here!' />
		</Result>
		<Stats>
			<StatsTitle text='Summary' />
			<Atributes bgcolor='bgred' color='red' img='./public/assets/images/icon-reaction.svg' title='Reaction' points={80} />
			<Atributes bgcolor='bgyellow' color='yellow' img='./public/assets/images/icon-memory.svg' title='Memory' points={92} />
			<Atributes bgcolor='bggreen' color='green' img='./public/assets/images/icon-verbal.svg' title='Verbal' points={61} />
			<Atributes bgcolor='bgblue' color='blue' img='./public/assets/images/icon-visual.svg' title='Visual' points={73} />
			<Button text='Continue' />
		</Stats>
	</Summary>;
};

export default App;
