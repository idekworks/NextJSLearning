'use client';

export default function Page() {
  // section 3.8 力試し

  type User = {
    name: string;
    age: number;
    premiumUser: boolean;
  };

  const data: string = `
uho,26,1
Jhon Smith,17,0
Mary Sue,14,1
`;

  // User[]型の変数usersを定義する。

  const users: User[] = [];

  const lines = data.split('\n');
  for (const line of lines) {
    if (line === '') {
      continue;
    }
    const [name, ageString, premiumUserString] = line.split(',');
    const age = Number(ageString);
    const premiumUser = premiumUserString === '1';

    users.push({
      name,
      age,
      premiumUser,
    });
  }

  function view(users: User[]) {
    for (const user of users) {
      if (user.premiumUser) {
        console.log(`${user.name} (${user.age})はプレミアムユーザーです`);
      } else {
        console.log(
          `${user.name} (${user.age})はプレミアムユーザーではありません`,
        );
      }
    }
    return 0;
  }
  return (
    <div>
      {data}
      {view(users)}
    </div>
  );
}
