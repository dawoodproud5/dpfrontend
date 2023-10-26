import React from "react";
import TeamsMemberCard from "./TeamsMemberCard";
import CEOCard from "./CeoCard";
function TeamMembers() {
  return (
    <div className="flex flex-col justify-center items-center mx-auto space-y-14 gap-8 px-4 min-h-screen mb-24">
      <div className="bg-white  mx-auto">
        {/* <h1 className='text-[black] text-xl font-bold '>Our Team Members</h1> */}
        <h2 className="text-[black] text-4xl font-semibold ">Meet Our Team!</h2>
      </div>

      <div className="w-full mx-auto max-w-[1080px]">
        <CEOCard
          name="Muhammad Dawood"
          position="CEO, Founder"
          bio="Author of idea and founder of this Company. Dawood is the one driving the team, 
                        and keeping constant motivation running alive through each and every team member. 
                        Dawood's leadership is like a fresh cup of coffee - it wakes us up, keeps us energized,
                         and makes us feel like we can conquer the world... Or at least the next Project :)"
        />
      </div>

      <div className="flex flex-col justify-center items-center gap-10 mx-auto">
        <p className="font-bold text-3xl">Administrative Coordinator</p>
        <div className="grid grid-col-1 xs:grid-cols-2 sm:grid-cols-3 lg:grid-cols-3 gap-4 md:gap-10 lg:gap-6 justify-center items-center">
          <TeamsMemberCard
            name="Sarah Jane"
            position="Cheif Coordinator"
            bio="Sarah is like a superheroine who communicates with different teams faster than the speed of light.
                         Her email game is so strong, it&#39;s rumored that she once received a response before hitting send!"
            imageUrl="/Images/TeamMembers/Coordinators/Sarah Dawood Proud.jpg"
          />
          <TeamsMemberCard
            name="Alex Miron"
            position="Sales Coordinator"
            bio="Alex is like a magician who can sell ice to an Eskimo. 
                        He's so good at closing deals, some say he once sold a pen to a pencil factory, 
                        a testament to his extraordinary talent and sheer force of will when it comes to sealing the deal. "
            imageUrl="/Images/TeamMembers/Coordinators/Alux Miron Dawood Proud.jpg"
          />
          <TeamsMemberCard
            name="Robert Howell"
            position="Production Coordinator"
            bio="Robert Howell is our master of production mayhem. He&#39;s like a ninja, silently coordinating all of our video editors while they cut, 
                        slice, and dice their way to cinematic glory. He's the go-to guy for anything production-related."
            imageUrl="/Images/TeamMembers/Coordinators/Robert Dawood Proud.jpg"
          />
        </div>
      </div>

      {/* Content Writes 🔶*/}
      <div className="flex flex-col justify-center items-center gap-10 mx-auto">
        <p className="font-bold text-3xl">Content Writer</p>
        <div className="grid grid-col-1 xs:grid-cols-2 sm:grid-cols-3 lg:grid-cols-4 gap-4 md:gap-10 lg:gap-6 justify-center items-center">
          <TeamsMemberCard
            name="John Ambrose"
            position="Script Writer"
            bio="John Ambrose is the genius behind our hilarious YouTube videos, and we&#39;re pretty sure 
                        he&#39;s secretly writing material for the next Dave Chappelle special. Don&#39;t let his serious demeanor fool you, John&#39;s got jokes for days."
            imageUrl="/Images/TeamMembers/ContentWrites/John Dawood Proud.jpg"
          />
          <TeamsMemberCard
            name="Christine Lumber"
            position="Script Writer"
            bio="Christine can write a video script so good, even cats will pause their nap to watch. Plus, 
                        She&#39;s always one pun ahead of the game. Just don&#39;t get her started on her conspiracy theories about talking cats."
            imageUrl="/Images/TeamMembers/ContentWrites/Christine.jpg"
          />
          <TeamsMemberCard
            name="Sheamol Ali"
            position="Copywriter"
            bio="Sheamol sees Words as his playthings, which he can twist and turn at will to create masterpieces.
                         Ali&#39;s writing is so good, it&#39;s almost criminal. In fact, he once wrote a headline so captivating, it caused a traffic jam. "
            imageUrl="/Images/TeamMembers/ContentWrites/Sheamol Ali.jpg"
          />
          <TeamsMemberCard
            name="Maria Gonzaga"
            position="Technical Writer"
            bio="Maria can turn a jumbled mess of technical jargon into a beautifully crafted masterpiece
                         with the precision of a surgeon and the humor of a stand-up comedian. She's the wordsmith wizard of the team."
            imageUrl="/Images/TeamMembers/ContentWrites/Maria.jpg"
            site="Remote"
          />
        </div>
      </div>

      {/* Graphic Designers🔶*/}
      <div className="flex flex-col justify-center items-center gap-10 mx-auto">
        <p className="font-bold text-3xl">Graphic Designers</p>
        <div className="grid grid-col-1 xs:grid-cols-2 sm:grid-cols-3 lg:grid-cols-4 gap-4 md:gap-10 lg:gap-6 justify-center items-center">
          <TeamsMemberCard
            name="Charlie Murad"
            position="Chief Thumbnail Designer"
            bio="Charlie can make a thumbnail so eye-catching, even your grandma will want to click on it.
                         We suspect he&#39;s secretly casting spells on them, but hey, as long as they look good, we won&#39;t ask questions."
            imageUrl="/Images/TeamMembers/Thumbnail/Charlie Murad.jpg"
          />
          <TeamsMemberCard
            name="Angela Coble"
            position="Channel Art Designer"
            bio="Angela Coble can turn bland YouTube channels into vibrant works of art. 
                        She&#39;s got an eye for design and a stomach for endless cups of coffee – the perfect combination for a YouTube channel art wizard"
            imageUrl="/Images/TeamMembers/Thumbnail/Angela Coble.jpg"
          />
          <TeamsMemberCard
            name="Joanna Smith"
            position="Thumbnail Designer"
            bio="She is the ruler of design, and the caffeine-fueled Picasso of our team. 
                        She can turn a bland thumbnail into a masterpiece that would make even Mona Lisa jealous. She&#39;ll make your eyes pop!"
            imageUrl="/Images/TeamMembers/Thumbnail/Joanna Smith.jpg"
          />
          <TeamsMemberCard
            name="Lorraine Duggan"
            position="Branding Designer"
            bio="Lorraine can turn dull brands into shiny unicorns. When she&#39;s not whipping up designs, 
                        you can find her sipping on chai and plotting her world domination (of the design industry, of course)."
            imageUrl="/Images/TeamMembers/Thumbnail/Lorraine Duggan.jpg"
          />
        </div>
      </div>

      {/* expert voice artist */}
      <div className="flex flex-col justify-center items-center gap-10 mx-auto">
        <p className="font-bold text-3xl">Voice Over Artists</p>
        <div className="grid grid-col-1 xs:grid-cols-2 sm:grid-cols-3 lg:grid-cols-4 gap-4 md:gap-10 lg:gap-6 justify-center items-center">
          <TeamsMemberCard
            name="Michelle Edwards"
            position="British Accent"
            bio="Michelle is voiceover artist extraordinaire. She&#39;s got a voice so smooth,
                         it could make a baby fall asleep mid-cry. When she&#39;s not nailing the perfect take, she's probably teaching Siri how to speak properly."
            imageUrl="/Images/TeamMembers/Voice Artist/Michelle Edwards.jpg"
            site="Remote"
          />
          <TeamsMemberCard
            name="Megan Bunting"
            position="American Accent"
            bio="Megan is the American accent wizard of our YouTube channels. 
                        Her voice is so smooth, it could convince you to buy a toaster even if you don&#39;t eat bread. We suspect she might actually be a siren in disguise."
            imageUrl="/Images/TeamMembers/Voice Artist/Megan Bunting.jpg"
            site="Remote"
          />
          <TeamsMemberCard
            name="Matt Gallagher"
            position="American Accent"
            bio="Matt's voice is so smooth, it could make a porcupine purr. He can make anything sound like it belongs on the big screen.
                         Just don&#39;t ask him to sing – we&#39;re still recovering from the last time he tried."
            imageUrl="/Images/TeamMembers/Voice Artist/Matt Gallagher.jpg"
            site="Remote"
          />
          <TeamsMemberCard
            name="Claire Lindsay"
            position="Canadian Accent"
            bio="Claire can make a script sound so good, you&#39;ll want to hire her just to read your grocery list.
                         And if you ask nicely, she might even throw in a few &#39;ehs&#39; and &#39;aboots&#39; for free. Her vocals can make maple syrup jealous."
            imageUrl="/Images/TeamMembers/Voice Artist/Claire Lindsay.jpg"
            site="Remote"
          />
        </div>
      </div>

      {/* Editiors🔶*/}
      <div className="flex flex-col justify-center items-center gap-10 mx-auto">
        <h2 className="font-bold text-3xl">Video Editors</h2>
        <div className="grid grid-col-1 xs:grid-cols-2 sm:grid-cols-3 lg:grid-cols-4 gap-4 md:gap-10 lg:gap-6 justify-center items-center">
          <TeamsMemberCard
            name="Alan Cook"
            position="Chief Video Editor"
            bio='Alan is the chief video editor at our company, but he&#39;s also known as the "Master of Cuts" because he can make any footage look like a Hollywood blockbuster. Just don&#39;t ask him to edit his own TikTok videos.'
            imageUrl="/Images/TeamMembers/Editors/Alan.jpg"
            site="In-Office"
          />
          <TeamsMemberCard
            name="Muhammad Jarjees"
            position="Commercial Editor"
            bio="Meet Jarjees, our commercial video editor who can make a boring ad look like a Hollywood blockbuster. He&#39;s so good at commercial editing, he can even make us excited about vacuum cleaners!"
            imageUrl="/Images/TeamMembers/Editors/jarjees.jpg"
            site="In-Office"
          />
          <TeamsMemberCard
            name="Haroon Khan"
            position="Corporate video editor"
            bio="Haroon Khan can make even the dullest meeting look like a blockbuster event. With his magic touch, your quarterly reports will have more drama than a Game of Thrones episode."
            imageUrl="/Images/TeamMembers/Editors/haroon.jpg"
            site="In-Office"
          />
          <TeamsMemberCard
            name="Ayesha Gul"
            position="VFX Editor"
            bio="Ayesha can make anything possible with a few clicks and some movie magic. From exploding buildings to flying unicorns, she's got your visual effects needs covered. (at least on screen)."
            imageUrl="/Images/TeamMembers/Editors/Editor4.jpg"
            site="In-Office"
          />
          <TeamsMemberCard
            name="Sana Zulqarnain"
            position="Video Animator"
            bio="Meet Sana, our video animator who can bring even the most lifeless objects to life. With her creativity, a spoon can become a superhero, a stapler can breakdance, and a pencil can fly."
            imageUrl="/Images/TeamMembers/Editors/sana.jpg"
            site="Remote"
          />
          <TeamsMemberCard
            name="Tanveer Hassan"
            position="Assistant Editor"
            bio="Watch out Hollywood, we&#39;ve got a video editing superstar in our midst - Tanveer can make even the most mundane footage look like a blockbuster hit!"
            imageUrl="/Images/TeamMembers/Editors/Tanveer.jpg"
            site="Remote"
          />
          <TeamsMemberCard
            name="Zubair Aslam"
            position="Assistant Editor"
            bio="Zubair can make a blooper reel look like an Oscar-winning masterpiece. He&#39;s so good at editing, he can even make our CEO&#39;s awkward & cringy dance moves look like a viral sensation. "
            imageUrl="/Images/TeamMembers/Editors/zubair.jpg"
            site="Remote"
          />

         
          <TeamsMemberCard
            name="Aleen Zaheer"
            position="Assistant Editor"
            bio="Aleen is the master of both pixels and lipsticks. She ensures that every frame is not only flawlessly edited, but also looks stunning enough to make the Kardashians jealous."
            imageUrl="/Images/TeamMembers/Editors/hira.jpg"
            site="Remote"
          />
          <TeamsMemberCard
            name="Moubeen Dawood"
            position="Assistant Editor"
            bio="Meet Moubeen Dawood, our Assistant Video Editor who is definitely NOT the Son of our CEO Dawood (or is he? We&#39;re still investigating). He&#39;s got an eye for detail and a knack for making us laugh."
            imageUrl="/Images/TeamMembers/Editors/moubeen.jpg"
            site="In-Office"
          />
        </div>
      </div>
    </div>
  );
}

export default TeamMembers;
