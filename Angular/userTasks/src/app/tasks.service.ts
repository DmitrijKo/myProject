export class TasksService {
  public tasks = [
    {
      project: 'One',
      description: 'Sukurti kontaktinę formą klientams',
    },
    {
      project: 'Two',
      description:
        'Sukurti kontaktų puslapį ir pažūrėti kodėl neveikia žemėlapis',
    },
    {
      project: 'One',
      description: 'Į puslapį įdėti google analitics',
    },
    {
      project: 'Three',
      description: 'About puslapis blogai veikia, jį reikia pataisyti',
    },
  ];

  public addTask(project: string, description: string) {
   this.tasks.push({
      project: project,
      description: description
   });
  }

}
