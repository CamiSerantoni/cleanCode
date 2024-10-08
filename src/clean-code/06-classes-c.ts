(() => {

    // Aplicando principio de responsabilidad única
    // Priorizar la composición frente a la herencia! 
    /* al menos que sea estrictamente necesario evitar las extensiones
    los extends por que añaden una capa extra de complejidad
    Esto quiere decir que  cada clase se encargue de lo que corresponde
    y no de lo que no se requiera

    De ser posible:
    que cada una de nuestras propiedades (Person, user, Settings)
    se mantenga aislada mente sin necesidad de extenciones 
    de modo que sea más facil de leer y mantener
    */

    type Gender = 'M' | 'F';

    interface PersonProps {
        birthdate: Date;
        gender: Gender;
        name: string;



    }
    class Person {
        /* Se acostumbra que este ordenado alfabeticamente*/
        public birthdate: Date;
        public gender: Gender;
        public name: string;



        constructor({ name, gender, birthdate }: PersonProps) {
            this.name = name;
            this.gender = gender;
            this.birthdate = birthdate;
        }
    }


    interface UserProps {
        email: string;
        role: string;
    }

    class User {

        public email: string;
        public lastAccess: Date;
        public role: string;

        constructor({ email, role }: UserProps) {

            this.lastAccess = new Date()
            this.email = email;
            this.role = role;
        }
        checkCredentials() {
            return true
        }
    }

    interface SettingsProps {
        lastOpenFolder: string;
        workingDirectory: string;
    }

    class Settings {

        public workingDirectory: string;
        public lastOpenFolder: string;
        constructor({
            workingDirectory,
            lastOpenFolder,
        }: SettingsProps
        ) {
            this.workingDirectory = workingDirectory;
            this.lastOpenFolder = lastOpenFolder;
        }
    }

    /* UserSettings será la composición de User y Settings*/

    interface UserSettingsProps {
        birthdate: Date;
        email: string;
        gender: Gender;
        lastOpenFolder: string;
        name: string;
        role: string;
        workingDirectory: string;


    }


    class UserSettings {
        public person: Person;
        public user: User;
        public settings: Settings;

        constructor({
            name, gender, birthdate,
            email, role,
            lastOpenFolder, workingDirectory
        }: UserSettingsProps) {
            this.person = new Person({ name, gender, birthdate });
            this.user = new User({ email, role });
            this.settings = new Settings({ lastOpenFolder, workingDirectory })

        }

    }

    const userSettings = new UserSettings(
        {
            workingDirectory: 'usr/home',
            lastOpenFolder: '/home',
            email: 'fernando@gmail.com',
            role: 'admin',
            name: 'fernando',
            gender: 'M',
            birthdate: new Date('1985-10-21')
        }

    )

    console.log({ userSettings })









})()