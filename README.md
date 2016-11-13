<p align="center">
  <a href="http://fontchi.ir/"><img src="http://fontchi.ir/static/logo/fontchi-rectangular.png" alt="Fontchi"/></a>
</p>
<p align="center"><a href="http://fontchi.ir/">Fontchi | فونت چی</a></p>
[![contributions welcome](https://img.shields.io/badge/contributions-welcome-brightgreen.svg?style=flat)](https://github.com/neacodin/fontchi/fork)
[![HitCount](https://hitt.herokuapp.com/neacodin/fontchi.svg)](https://github.com/neacodin/fontchi)
[![Fontchi](https://img.shields.io/website-up-down-green-red/http/fontchi.ir.svg)](http://fontchi.ir)
[![Issues](https://img.shields.io/github/issues-raw/neacodin/fontchi.svg)](https://github.com/neacodin/fontchi/issues)
[![Crates.io](https://img.shields.io/crates/l/rustc-serialize.svg)](https://github.com/neacodin/fontchi/blob/master/LICENSE)


-----


What is Fontchi? - فونت چی چیه؟
-----

Fontchi is an Open Source Service that allows you to choose your desired farsi fonts amongst lots of them by comparing them and seeing them in Action.
You can Download your fonts once you made your choice and use them later in your projects.

<p align="right">
فونت چی یه سرویس باز متن ه که بهتون اجازه میده از بین فونت های فارسی، فونت مورد نظرتون رو مقایسه کنید، در شرایط مختلف تست کنید و در نهایت دانلود کنید و در پروژه هاتون استفاده کنید.
</p>


What Fonts Can I find in Fontchi? - چه فونت هایی رو میشه تو فونت چی پیدا کرد؟
-----

All fonts in Fontchi Are Farsi/Persian Fonts which have been chosen carefuly. We've tried to gather a list of most used Farsi Fonts which we have their makers information. If you know fonts that are suitable to be used in Fontchi make an Issue with all the information in it or contact us with Email: [Neacodin Contact](mailto:info@neacod.in)

<p align="right">
  تمامی فونت های فونت چی فونت های فارسی هستن که با دقت انتخاب شده اند. ما تلاش کردیم از فونت هایی استفاده کنیم که بیشترین استفاده رو دارن و همچنین اطلاعات سازنده هاشون در دسترسه. اگر شما هم فونتی سراغ دارید که برای استفاده در فونت چی مناسبه می تونید اطلاعات ش رو 
  از طریق قسمت مشکلات مخزن
  بفرستید یا با ما از طریق <a href="mailto: info@neacod.in">ایمیل</a> در ارتباط باشید
</p>

What's Fontchi built with? - فونت چی با چی ساخته شده؟
-----
Fontchi Uses [NodeJS](http://www.nodejs.org) as Backend Technoloy to Handle the Server Side Calculations and Tasks and [AngularJS 1.x](http://angularjs.org) to show list of fonts. We use [GruntJS](http://gruntjs.com) to run a series of task and to handle the build process.

Contribution - کمک در بهبود
----
Fontchi didn't mean to be an Open Source Project at the beginning, but as [Neacodin](http://neacod.in) grew more and became larger we found other projects to work on, and there was no more time left that we could spend on Fontchi! So we decided to make it an Open Source project so that people could contribute and build what was desired that maybe we couldn't build by ourselves. All kind of contributions are welcomed. You can contribute to the backend and frontend or Design/UI/UX. You can also contribute to make the wiki of this repo to be more rich.

<p align="right">
فونت چی در ابتدا قرار نبود که یک پروژه باز متن باشه، اما هر چی نیکودین بیشتر رشد کرد و بزرگتر شد ما پروژه های بیشتری برای انجام دادن پیدا کردیم و زمان برای پیش بردن فونت چی کمتر شد تا جایی که زمانی برای جلو بردن اون نموند. پس تصمیم گرفتیم تا فونت چی رو بازمتن منتشر کنیم تا همه بتونن بر اساس چیزی که ایده آله اون رو جلو ببرن که شاید ما به تنهایی نمی تونستیم. هر جور کمک در بهبود پروژه مورد استقبال قرار می گیره. می تونید توی بهبود کد های سمت سرور ، سمت کلاینت یا حتی طراحی و رابطه کاربری کمک کنید. همچنین می تونید به ویکی این مخزن کمک کنید تا کامل تر و غنی تر بشه.
</p>


Where Shoud I start?! - از کجا باید شروع کنم؟
-----
First you need to Dependencies to build project. Start with Installing **Bower and Grunt** with Node Package Manager (NPM). If you don't have Node Installed you should download and Install it from [nodejs.org](https://nodejs.org).
<p align="right">
ابتدا باید نیازمندی های پروژه برای پروسه بیلد رو نصب کنید. می تونید با نصب <strong> بوور و گرانت </strong> شروع کنید. اگر نود جی اس رو نصب ندارید از <a href="https://nodejs.org"> وبسایت نود</a> اون رو نصب کنید.
</p>

```sh
$ npm i -g bower grunt grunt-cli
```

Once you installed them clone this repository by using the command below:
<p align="right">
بعد از این می تونید این مخزن رو کلون کنید.
</p>

```
// If you have Configured your SSH
$ git clone git@github.com:neacodin/fontchi.git
// Otherwise you should use https
$ git clone http://github.com/neacodin/fontchi.git
```

Head to Fontchi Project Folder and Install all the dependencies:
<p align="right">
حالا وارد پوشه پروژه بشید و تمام پیش نیاز های پروژه رو نصب کنید.
</p>

```
$ cd fontchi
$ npm install && bower install
```

Now use Grunt Cli to build project:
<p align="right">
می تونید با استفاده از رابط دستوری گرانت پروسه بیلد رو انجام بدید.
</p>

``` 
$ grunt build
```

Now you can start Node server by running the command below:
<p align="right">
و نهایتا سرور نود رو از طریق دستور زیر اجرا کنید و تغییرات خودتون رو ببینید.
</p>

``` 
$ node server.js
```

