export class UsersService {
  public users = [
    {
      name: 'Jonas',
      surname: 'Jonaitis',
      tasks: [
        {
          project: 'Two',
          description: 'Prekių kataloge blogai rodo aprašymą.',
        },
        {
          project: 'Three',
          description: 'About puslapis blogai veikia, jį reikia pataisyti.',
        },
      ],
    },
    {
      name: 'Antanas',
      surname: 'Petraitis',
      tasks: [],
    },
    {
      name: 'Kazys',
      surname: 'Biliunas',
      tasks: [],
    },
  ];

  public addUser(name: string, surname: string) {
    this.users.push({
      name: name,
      surname: surname,
      tasks: [],
    });
  }

  public assign(userIndex: number, taskProject: string, taskDescription: string) {
    this.users[userIndex].tasks.push({
      project: taskProject,
      description: taskDescription
    });
  }
}
