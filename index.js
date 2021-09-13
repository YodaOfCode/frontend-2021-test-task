const pandemicStartMap = "XX0X10010X000X010X0";
const pandemicArray = pandemicStartMap.split('');

const uninfected = '0'
const infected = '1'
const ocean = 'X'

const firstMapWrapper = document.querySelector('.pandemic__start__wrapper')
const secondMapWrapper = document.querySelector('.pandemic__end__wrapper')

const pandemicStart = () => {
    pandemicArray.map(item => {
        const pandemicArea = document.createElement('div')
        firstMapWrapper.append(pandemicArea)

        switch (item) {
            case uninfected:
                return pandemicArea.classList.add('green')
            case infected:
                return pandemicArea.classList.add('red')
            case ocean:
                return pandemicArea.classList.add('blue')
        }
    })
}

const pandemicEnd = () => {

    pandemicArray.map(item => {
        const pandemicArea = document.createElement('div')
        secondMapWrapper.append(pandemicArea)

        if (item === infected) {
            newArr.push(item)
            pandemicArea.classList.add('red')
        }

    })

}

pandemicStart()
pandemicEnd()
