export function calculatePoints(team1score: number, team2score: number, prediction1: number, prediction2: number) {
    const fullPoints = team1score === prediction1 && team2score === prediction2;
    if (fullPoints) return 5;

    let matchWinner;
    if (team1score > team2score) {
        matchWinner = "TEAM1";
    } else if (team2score > team1score) {
        matchWinner = "TEAM2"
    } else {
        matchWinner = "DRAW"
    }

    let predWinner;
    if (prediction1 > prediction2) {
        predWinner = "TEAM1";
    } else if (prediction2 > prediction1) {
        predWinner = "TEAM2"
    } else {
        predWinner = "DRAW"
    }

    if (matchWinner === predWinner) return 3

    return 0;
}