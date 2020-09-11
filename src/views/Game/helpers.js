import leven from 'leven';

export const CORRECT_ANSWER_POINTS = 100;

export const isCorrectSpelling = (string1, string2) => {
    const trimmedString1 = string1.toLowerCase().trim();
    const trimmedString2 = string2.toLowerCase().trim();
    const levenScore = leven(trimmedString1, trimmedString2);
    return levenScore <= 3;
};

export const isCorrectPlayer = (player, key, answers, squad) => {
    const squadPlayer = getPlayer(squad, player.player);
    const answer = answers[key];
    const playerLastName = getLastName(squadPlayer);
    return isCorrectSpelling(playerLastName, answer);
};

export const correctGame = () => {

};