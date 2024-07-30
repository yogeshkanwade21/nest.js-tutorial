import { Comment } from "src/entities/comment.entity";
import { Topic } from "src/entities/topic.entity";
import { User } from "src/entities/user.entity";
import { PostgresConnectionOptions } from "typeorm/driver/postgres/PostgresConnectionOptions";


const ormConfig: PostgresConnectionOptions = {
    type: 'postgres',
    database: 'testDB',
    host: 'localhost',
    port: 5432,
    username: 'yogesh',
    password: '12345',
    entities: [User, Comment, Topic],
    synchronize: true, // not recommended for production
    //Automatically creates or updates database tables based on your entity definitions.
    // This means whenever your application starts, TypeORM will compare your entity structure with the database schema and make necessary changes.
}

export default ormConfig;