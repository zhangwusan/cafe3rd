
export default function Footer() {
  return (
    <>
      <div className="flex justify-between text-white bg-green-600 py-20 px-3 lg:px-40">
        <div className="space-y-5">
          <div className="font-bold">Newsletter</div>
          <div>Stay up to date with all the latest from 3rd<br/>Cafe</div>
          <div className="relatve border">
            <input className="bg-inherit" type="email" name="email" id="email" />
            <span className="border-l">
                <span className="px-12 hover:bg-white hover:text-black">join</span>
            </span>
          </div>
        </div>
        <div className="space-y-5">
            <div className="font-bold">Talk to Us</div>
            <div>123-456-7890<br/>info@3rdcoffee.com</div>
            <div>Intitute of Technology of Cambodia</div>
        </div>
        <h3 className="text-[32px] font-bold">
            Instagram <br/>
            Facebook <br/>
            Twitter
        </h3>
      </div>
      <div className="text-center">@2023&nbsp;3rd&nbsp;Cafe&nbsp;by&nbsp;Group3&nbsp;of&nbsp;OOP</div>
    </>
  );
}
