export default function auth({ next }) {
    if (!localStorage.getItem('id')) {
        localStorage.korz=[]
        localStorage.billID=""
    }
    else{
        localStorage.removeItem('korz')
        localStorage.removeItem('billID')

    }
    return next();
}