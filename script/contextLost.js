let group = {
    title: 'Java 47',
    students: ['Maria', 'Anastasia', 'Olga', 'Tatiana'],
    showList: function () {
        title = this.title;
        const show = function (name) {
            console.log(`${title}: ${name}`);
        }
        this.students.forEach(show);
    }
};

//Unmodifyed
group.showList();
const newGroup = group;
group = null;
console.log('=======================');
newGroup.showList();