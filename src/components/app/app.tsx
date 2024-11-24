import MainPage from '../../pages/main-page/main-page';

type AppProps = {
  offerCardsCount: number;
}

function App({offerCardsCount}: AppProps): JSX.Element {
  return (
    <MainPage offerCardsCount={offerCardsCount} />
  );
}

export default App;
