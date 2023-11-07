import chalkAnimation from "chalk-animation";
import chalk from "chalk";

const sleep = () => {
  return new Promise((res) => {
    setTimeout(res, 2000);
  });
};

async function Welcome() {
  let welcomMessage = chalkAnimation.rainbow("Welcome to internet banking");
  await sleep();
  welcomMessage.stop;

  console.log(
    chalk.cyanBright(`
    ____ ____ ____ ___  ____ ____ _  _    ___  ____ _  _ _  _    _    ___ ___  
    |___ |__| |__/ |  \ |___ |___ |\ |    |__] |__| |\ | |_/     |     |  |  \ 
    |    |  | |  \ |__/ |___ |___ | \|    |__] |  | | \| | \_    |___  |  |__/ 
                                                                               `)
  );
}

export default Welcome;
