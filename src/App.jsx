import BoxAtributes from "./components/boxatributes/BoxAtributes";
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
			<BoxAtributes />
			<Button text='Continue' />
		</Stats>
	</Summary>;
};

export default App;
