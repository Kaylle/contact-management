export interface UserType {
    id: number,//| null,
    name: string,
    phone: number | null,
    email: string,
}

const testData = [
    {
        id: 1,
        name: 'Куркина Екатерина',
        phone: 9965901445,
        email: 'kaylle@yandex.ru'
    },
    {
        id: 2,
        name: 'Куркина Екатерина',
        phone: 9965901445,
        email: 'kaylle@yandex.ru'
    },
    {
        id: 3,
        name: 'Куркина Екатерина',
        phone: 9965901445,
        email: 'kaylle@yandex.ru'
    }
    ] as UserType[]

export const getContactsList = () => {
    const data = localStorage.getItem('contact-data')
    if (!data) {
        localStorage.setItem('contact-data',JSON.stringify(testData))
        return testData
    } else {
        return JSON.parse(data)
    }
}

export const createContact = (formData:UserType) => {
    const contactList = getContactsList() as UserType[]
    formData.id = Math.max(...contactList.map(x => x.id)) + 1
    contactList.push(formData)
    localStorage.setItem('contact-data',JSON.stringify(contactList))
}

export const editContact = (formData:UserType) => {
    const contactList = getContactsList() as UserType[]
    const index = contactList.findIndex(x => x.id === formData.id)
    contactList[index] = formData
    localStorage.setItem('contact-data',JSON.stringify(contactList))
    console.log(formData)
}

export const deleteContact = (id:number) => {
    const contactList = getContactsList() as UserType[]
    const index = contactList.findIndex(x => x.id === id)
    contactList.splice(index,1)
    localStorage.setItem('contact-data',JSON.stringify(contactList))
}