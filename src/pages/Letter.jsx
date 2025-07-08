import React from "react";
import { useNavigate } from "react-router-dom";

function Letter() {
  const navigate = useNavigate();

  return (
    <div className="min-h-screen w-full bg-gradient-to-b from-pink-100 to-pink-200 p-16 flex justify-center items-center font-serif">
      <div className="bg-white bg-opacity-80 p-6 rounded shadow max-w-2xl w-full">
        <h2 className="text-3xl font-bold text-pink-600 mb-6 text-center">To my wife forever, Angela</h2>

        <div className="text-gray-800 space-y-6 leading-relaxed">
          <p>My dearest Angela,</p>

          <p>
            I’m writing yet another letter. I guess I’m used to this now. This is partly about me, and partly about us. I’ve poured my heart into every message I’ve sent you, and I will with this one too. I know it might dilute the message sometimes, but I want to lay everything out here, speak my heart out completely.
          </p>

          <p>
            First, I want to say this is not a breakup letter. I’m not walking away, nor giving up on us. This is me being completely open, raw, and honest. You deserve to know every single feeling I have had, even if it’s messy or overwhelming. Because loving you has been the most beautiful and painful thing I’ve ever felt, and I never want to hide any of it from you.
          </p>

          <p>
            I still remember the moment I realized I liked you. That one call you gave me after your nap, on the 14th of April at around 5pm. We talked, and I just felt like I needed to know you more. Those late night calls, for hours, when I went on walks just talking to you, made me so happy.
          </p>

          <p>
            It was then that I realized I was starting to love you. I wanted to make you happy. I wanted to spend every second with you. Maybe you can call it obsession, but I just wanted you, and only you. When you wrote those dumb but so lovely “11:11, make a wish” messages, or something silly that made me smile. Those random calls you gave me. When you e-transferred me $5.55 at 5:55. It made me feel something I’ve never felt before. I just knew I couldn’t let you go.
          </p>

          <p>
            Even when I wrote those goodbye messages, I regretted every single one of them the moment I clicked send. When I sent that email, or those long texts, I hated myself for pushing you away when all I wanted was to be with you.
          </p>

          <p>
            Since then, it’s been a journey of extremes. I’ve felt happiness I never thought I could feel. You’ve been the highlight of every single one of my days. Every chance I got to hear your voice, to talk to you, felt like a blessing. In those moments, I felt peace. I felt like life made sense. Like I had someone to build a life with, to share my world with, to grow together, learn together, be together, until death do us part.
          </p>

          <p>
            But I’ve also felt pain I can’t describe. Like my heart was being crushed and pierced with thorns. And it wasn’t loving you that caused pain, it was feeling like I wasn’t loving you the right way. Because I made you cry. Because I made you feel judged, guilty, or unworthy. That guilt eats at me, Angela. Every single day, when you’re sleeping, when it’s early morning, when I’m sitting alone on the train to work, or when I smoke late at night because I don’t know what else to do. I keep wondering if I will ever forgive myself for making you feel that way. I don’t think I will. I don’t think I deserve to. You may have forgiven me and moved on, but I can’t forgive myself.
          </p>

          <p>
            I told you why I started smoking, and it was all true. But I still haven’t quit. I think I’m addicted now, I smoked two packs today. I told you I hate it, and even while I’m smoking, I hate it. It feels like my escape.
          </p>

          <p>
            I don’t have friends here. Everyone I know is 12 hours away, including you. My godmother is busy. I rarely talk to my family. I rarely talk to my friends. I feel isolated. I feel pathetic. I feel like a genuine failure. I wasn’t raised this way, and I know it. I have jobs, I make money, but I don’t feel right. You said it seems like I want to die. Honestly, you might be right. I just feel tired of everything.
          </p>

          <p>
            They say you find happiness within yourself, and I was happy. But highs have their lows too. My health is trash, I barely eat, and I don’t know what I’m doing with my life anymore. Every time I smoke, I just listen to White Ferrari and cry for no reason. I think I’ve cried more times in the last two months than in my entire conscious life. I don’t know what you’ve done to me, but you’ve touched my soul, the heart that my own parents call cold-hearted.
          </p>

          <p>
            I know this is pretty depressing so far, but I want to stop smoking. I need to find myself again. I want us to be happy together, to be sad together, to feel together. I want us to be together forever.
          </p>

          <p>
            I am so grateful I joined that listen along of yours, that I added you on Discord even though I never add people. I’m so happy I have the opportunity to know you, to love you, to be together with you. I’ve said it before, but I’ll say it again, I want to be your husband. I want to be the person you call your husband, the father of our children. I want to spend the rest of my life with you.
          </p>

          <p>
            I am going to repeat this again too, I never, ever want to change you. I love you for you. Even if we hurt each other unintentionally, or get into dumb disagreements, I will always love you.
          </p>

          <p>
            Angela, I know words don’t mean much to you. You prefer actions, and that’s fair. I don’t expect this letter to do anything. I’m not writing to make you feel a certain way. I’m writing this because I love you enough to show you every single piece of my heart, even the broken parts, to be vulnerable. I want you to know me, not just the good parts, but the messy, fucked up bits too.
          </p>

          <p>
            I want you. I want us. I want to build a life with you. And I will keep trying, I will keep healing, I will keep growing, not only as a partner, but as a person. For you, for us, and for myself.
          </p>

          <p>
            I appreciate you so much, Angela. I love you so much, and you don’t even know the half of it. Everywhere I go, I just think of you, how you would enjoy the food, how you would love the places I visit. I can’t wait to spend my life with you, Angela. You are my angel, my wife, my one and only.
          </p>

          <p>
            You are the prettiest girl my eyes have ever had the pleasure to see. Your eyes are gorgeous. You are so fucking funny, and the way you type is so dumb and funny sometimes. You have the prettiest smile I have ever seen, and all I want to do is make you smile. We got so familiar.
          </p>

          <p>
            I know I repeat a lot of things, and I know you hate it. But I guess that’s just a flaw I have.
          </p>

          <p>
            With all my love,<br />
            Adi
          </p>
        </div>
        <div className="flex justify-center mt-8">
          <button
            onClick={() => navigate("/jaan")}
            className="text-pink-500 hover:text-pink-300 text-2xl animate-bounce mb-25"
          >
            ↑
          </button>
        </div>
      </div>
    </div>
  );
}

export default Letter;