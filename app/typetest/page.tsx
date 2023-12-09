
export default async function Page() {
return (
    <div>
        <div>
            {obj.age}
        </div>
        <div>
            {obj2.age}
        </div>
        <div>
            {obj3.age}
        </div>
        <div>
            {planet2.color}
        </div>
    </div>
  )
}

// TypeScritのobjectは、必ずしもクラスに関連するものだけではない。
// TypeScriptでのobjectは、連想配列です。Pythonで言うところのdictのようなものです。
// objectの実態は、objectリテラルと呼ばれる式の一種です。
// objectリテラルはconst obj = {}で宣言されます。{}はブロックとは別の扱いです。
// 式が入る位置に{}があるとObjectリテラルと判断できます。
// objectにはobjectの型を付けることができます。

type human = {
 age: number;
 name: string;
}

const obj: human = {
 age: 10,
 name: 'taro',
}

// 型には別名をつけることができます。これはObjectに限った話ではありません。
type anotherT = typeof obj;

const obj2: anotherT = {
    age: 13,
    name: 'goro',
}

// 型引数を扱うこともできます。

type kata1<Parent, Children> = {
    age: Parent;
    name: Children;
}

const obj3: kata1<number, string> = {
    age: 11,
    name: 'tom',
}

// 部分型は、ある型Tが型Sを含んでいるときにSはTの部分型ということができます。
// 条件は、SがTのプロパティをすべて含んでいる。そのプロパティの型が同じであることの2点です。

type Planet = {
 scale: number;
 color: string;
}

type Earth = {
 scale: number;
 color: string;
 population: number;
}

const planet: Planet = {
 scale: 1000,
 color: 'red',
}

const earth: Earth = {
 scale: 1000,
 color: 'blue',
 population: 60000000000,
}

// これは部分型なのでOK
const planet2: Planet = earth;

// これはエラーになる
// const earth2: Earth = planet;












