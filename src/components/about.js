import Link from 'next/link';

function About() {
    return (
        <main>
            <h1>About</h1>
            <section>
                <div>
                    <p>Momentum is what drives something still into an unstoppable force of motion, power, energy and most importantly, change. It fuels motivation, defies stagnancy and demands the spurring of action. People who are constantly in momentum are those that make change, those that pursue something more and those that see in the world the potential for something better.</p>
                    <p>Momentum pushes us to keep moving in spite of the challenges we face. TEDxCMU Momentum hopes to teach the power of striving for more and taking the step that allows momentum to thrive—the first one forward.</p>
                    <Link href="https://www.tedxcmu.org/">
                        <a>
                            TEDxCMU.ORG
                        </a>
                    </Link>
                </div>
            </section>
        </main>
    );
}

export default About;
