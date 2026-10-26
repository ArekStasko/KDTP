
const container = {
    width: '100%',
    height: '100%',
    display: 'flex',
    alignItems: 'flex-start',
    justifyContent: 'center',
    pt: 40
}

const wrapper = {
    width: '100%',
    height: '100%',
    display: 'flex',
    alignItems: 'flex-start',
    justifyContent: 'space-around',
}

const questionBox = {
    width: '60%',
    height: '40%',
    display: 'flex',
    flexDirection: 'column',
    justifyContent: 'space-around',
}

const questionWrapper = {
    p: 6,
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center'
}

const answersBox = {
    display: 'flex',
}

const answer = {
    width: '90%',
    p: 5,
    m: 1
}

const usersBox = {
    width: '25%',
    height: '100%',
    pt: 3,
}

const usersPanel = {
    width: '100%',
    height: '70%',
    display: 'flex',
    flexDirection: 'column',
    justifyContent: 'flex-start',
    alignItems: 'center',
}

const usersCount = {
    width: '100%',
    mt: 4,
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'flex-start',
}

const usersChip = {
    width: '100%',
    height: '60%',
    mt: 4,
}

const userChip = {
    display: 'flex',
    justifyContent: 'space-around',
    alignItems: 'center',
    p: 1,
}

const avatar = {
    p: 1,
    transform: "none",
    width: '15%',
    height: '15%',
    opacity: 0.8
}

export default {
    container,
    questionBox,
    questionWrapper,
    answersBox,
    usersBox,
    answer,
    wrapper,
    usersPanel,
    usersCount,
    usersChip,
    userChip,
    avatar,
}