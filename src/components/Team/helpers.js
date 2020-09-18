import leven from 'leven';

export const CORRECT_ANSWER_POINTS = 100;

export const isCorrectSpelling = (string1, string2) => {
    const trimmedString1 = string1.toLowerCase().trim();
    const trimmedString2 = string2.toLowerCase().trim();
    const levenScore = leven(trimmedString1, trimmedString2);
    return levenScore <= 3;
};

export const isCorrectPlayer = (answerPlayer, correctAnswerPlayer) =>
    isCorrectSpelling(answerPlayer, correctAnswerPlayer);

const isCorrectManager = (answerManager, team) => isCorrectSpelling(answerManager, team.manager);

const isCorrectArena = (answerArena, team) => isCorrectSpelling(answerArena, team.arena);

export const correctTeamScore = (answerManager, answerArena, answerPlayers, team) => {
    let score = 0;
    if (isCorrectManager(answerManager, team)) {
        score += CORRECT_ANSWER_POINTS;
    }

    if (isCorrectArena(answerArena, team)) {
        score += CORRECT_ANSWER_POINTS;
    }

    answerPlayers.forEach((player, i) => {
        if (isCorrectPlayer(player, team.players[i].name)) {
            score += CORRECT_ANSWER_POINTS;
        }
    });

    return score;
};
