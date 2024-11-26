import MainPage from '../../pages/main-page/main-page';

type AppProps = {
  placeCardsCount: number;
}

function App({placeCardsCount}: AppProps): JSX.Element {
  return (
    <MainPage placeCardsCount={placeCardsCount} />
  );
}

export default App;
