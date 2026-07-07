import { SettingsIcon } from "lucide-react";
import { Button } from "../../components/ui/button";
import { Card, CardContent } from "../../components/ui/card";
import { Progress } from "../../components/ui/progress";

const navigationItems = [
  {
    icon: "/depth-4--frame-0-1.svg",
    label: "메인",
    isActive: true,
  },
  {
    icon: "/depth-4--frame-0.svg",
    label: "채팅",
    isActive: false,
  },
  {
    icon: "/depth-4--frame-0-3.svg",
    label: "자산관리사",
    isActive: false,
  },
  {
    icon: "/depth-4--frame-0-4.svg",
    label: "목표기록",
    isActive: false,
  },
  {
    icon: "/depth-4--frame-0-2.svg",
    label: "내정보",
    isActive: false,
  },
];

const infoCards = [
  {
    title: "Dining Expenses Up",
    description:
      "You spent 15% more on dining this week compared to last week.",
    image: "/depth-4--frame-1.png",
  },
  {
    title: "Energy Savings Opportunity",
    description:
      "Potential to save $200 by switching energy providers. Compare now.",
    image: "/depth-4--frame-1-1.png",
  },
];

export const StitchDesign = (): JSX.Element => {
  return (
    <div className="flex flex-col w-[412px] h-[917px] items-start relative bg-[#4ab1c8] rounded-[32px]">
      <div className="relative self-stretch w-full h-[919px] mb-[-2.00px] bg-black rounded-[22px] overflow-hidden border border-solid border-[#d6cccc]">
        <div className="flex flex-col h-full">
          <header className="flex items-center justify-between pt-4 pb-2 px-4 bg-black">
            <div className="flex-1 flex justify-center">
              <h1 className="[font-family:'Inter',Helvetica] font-bold text-white text-lg tracking-[0] leading-[23px]">
                Dashboard
              </h1>
            </div>
            <SettingsIcon className="w-6 h-6 text-white" />
          </header>

          <main className="flex-1 overflow-y-auto px-4 pb-4">
            <Card className="mt-4 bg-[#0d1d80] border-none rounded-[15px]">
              <CardContent className="p-6 flex flex-col items-center">
                <p className="font-bold text-white text-lg leading-[23px] [font-family:'Inter',Helvetica] tracking-[0] mb-4">
                  내 자산 총계
                </p>
                <p className="font-bold text-[#8ff7fd] text-3xl leading-6 [font-family:'Inter',Helvetica] tracking-[0] mb-2">
                  125,450원
                </p>
                <p className="font-normal text-base leading-6 [font-family:'Inter',Helvetica] tracking-[0]">
                  <span className="text-[#ff818e]">(🔺1.2%</span>
                  <span className="text-[#ffa0aa]">)</span>
                </p>
              </CardContent>
            </Card>

            <div className="flex flex-col gap-3 mt-6">
              <div className="flex items-center justify-between">
                <p className="font-medium text-white text-base leading-6 [font-family:'Inter',Helvetica] tracking-[0]">
                  내 자산관리 점수
                </p>
                <p className="font-normal text-white text-sm leading-[21px] [font-family:'Inter',Helvetica] tracking-[0]">
                  75/100
                </p>
              </div>
              <Progress value={75} className="h-2 bg-[#334c66]" />
            </div>

            <Card className="mt-6 bg-transparent border-white rounded-xl">
              <CardContent className="p-4">
                <p className="[font-family:'Inter',Helvetica] font-light text-white text-[13px] tracking-[0] leading-5">
                  xxx님, 이번달은 수익률이 좋아요! 다음달의 수익률은
                  <br />더 높게 나올 수 있도록 자산을 재설계 해볼까요?
                </p>
              </CardContent>
            </Card>

            <div className="flex justify-center mt-4">
              <Button className="bg-[#117fed] hover:bg-[#0d6ad4] rounded-xl [font-family:'Inter',Helvetica] font-bold text-white text-sm tracking-[0] leading-[21px]">
                AI 대화하기
              </Button>
            </div>

            <div className="flex items-center justify-between mt-8 mb-4">
              <h2 className="font-bold text-white text-[22px] leading-7 [font-family:'Inter',Helvetica] tracking-[0]">
                실시간 정보
              </h2>
              <button className="font-normal text-white text-sm leading-[21px] [font-family:'Inter',Helvetica] tracking-[0]">
                더보기
              </button>
            </div>

            <div className="flex flex-col gap-4">
              {infoCards.map((card, index) => (
                <Card key={index} className="bg-transparent border-none">
                  <CardContent className="p-0 flex items-start justify-between gap-4">
                    <div className="flex flex-col gap-1 flex-1">
                      <h3 className="[font-family:'Inter',Helvetica] font-bold text-white text-base tracking-[0] leading-5">
                        {card.title}
                      </h3>
                      <p className="[font-family:'Inter',Helvetica] font-normal text-[#91adc9] text-sm tracking-[0] leading-[21px]">
                        {card.description}
                      </p>
                    </div>
                    <div
                      className="w-[150px] h-[82px] rounded-xl bg-cover bg-center flex-shrink-0"
                      style={{ backgroundImage: `url(${card.image})` }}
                    />
                  </CardContent>
                </Card>
              ))}
            </div>
          </main>

          <nav className="flex items-start gap-2 pt-2 pb-3 px-4 bg-[#020202] border-t border-black">
            {navigationItems.map((item, index) => (
              <button
                key={index}
                className="flex flex-col items-center justify-end gap-1 flex-1"
              >
                <img className="h-8" alt={item.label} src={item.icon} />
                <span
                  className={`[font-family:'Inter',Helvetica] font-medium text-xs tracking-[0] leading-[18px] whitespace-nowrap ${
                    item.isActive ? "text-white" : "text-[#959799]"
                  }`}
                >
                  {item.label}
                </span>
              </button>
            ))}
          </nav>
        </div>
      </div>
    </div>
  );
};
