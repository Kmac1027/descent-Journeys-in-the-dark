function GameOverScreen({ chosenQuest }) {



    function playAgain() {
        document.location.reload(true);
    }

    return (
        <div >
            <h1>Game Over</h1>
            <p>{chosenQuest.area_descriptions.lose}</p>
            <button onClick={() => playAgain()}>Play Again</button>

        </div >
    );
}

export default GameOverScreen;