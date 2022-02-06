import { EntityRepository, Repository } from "typeorm";
import { User } from "../entities";

@EntityRepository(User)
class UserRepository extends Repository<User> {
    public async findByEmail(email: string): Promise<User | undefined> {
        const user = await this.findOne({
            where: {
                email
            }
        });

        return user;
    }
}

export default UserRepository;
