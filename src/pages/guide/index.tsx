import {
  ArrowRight,
  PlayCircle,
  Shield,
  Star,
  Sword,
  Target,
  TreePine,
  Users,
  Map as WorldMap,
  Zap,
} from 'lucide-react'
import { Footer } from '~/components/footer'
import { Navigation } from '~/components/navigation'
import { Badge } from '~/components/ui/badge'
import { Button } from '~/components/ui/button'
import { Card, CardContent, CardHeader, CardTitle } from '~/components/ui/card'
import { Tabs, TabsContent, TabsList, TabsTrigger } from '~/components/ui/tabs'

export const GameGuide: React.FC = () => {
  return (
    <div className="min-h-screen bg-background">
      <Navigation />
      <main className="pt-20">
        <section className="py-12 px-6">
          <div className="max-w-6xl mx-auto">
            <div className="text-center mb-12">
              <h1 className="text-4xl font-bold mb-4 hero-text">게임 공략 가이드</h1>
              <p className="text-muted-foreground text-lg">이프선셋의 모든 것을 마스터하세요</p>
            </div>

            <Tabs defaultValue="worldmap" className="space-y-8">
              <TabsList className="grid w-full grid-cols-2 lg:grid-cols-4 bg-card border border-border/50">
                <TabsTrigger value="worldmap" className="flex items-center gap-2">
                  <WorldMap className="w-4 h-4" />
                  월드맵
                </TabsTrigger>
                <TabsTrigger value="weapons" className="flex items-center gap-2">
                  <Sword className="w-4 h-4" />
                  무기 종류
                </TabsTrigger>
                <TabsTrigger value="skills" className="flex items-center gap-2">
                  <TreePine className="w-4 h-4" />
                  스킬 트리
                </TabsTrigger>
                <TabsTrigger value="combat" className="flex items-center gap-2">
                  <Target className="w-4 h-4" />
                  전투법
                </TabsTrigger>
              </TabsList>

              <TabsContent value="worldmap" className="space-y-6">
                <Card className="card-gaming border-border/50">
                  <CardHeader>
                    <CardTitle className="flex items-center gap-2">
                      <WorldMap className="w-5 h-5 text-primary" />
                      월드맵 가이드
                    </CardTitle>
                  </CardHeader>
                  <CardContent className="grid gap-6">
                    <div className="aspect-video bg-muted/30 rounded-lg flex items-center justify-center border border-border/50">
                      <div className="text-center">
                        <WorldMap className="w-16 h-16 mx-auto mb-4 text-muted-foreground" />
                        <p className="text-muted-foreground">대화형 월드맵</p>
                        <p className="text-sm text-muted-foreground mt-2">지역을 클릭하여 상세 정보를 확인하세요</p>
                      </div>
                    </div>

                    <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-4">
                      {[
                        {
                          id: crypto.randomUUID(),
                          name: '시작 마을',
                          level: 'Lv.1-5',
                          description: '모험의 시작점',
                          type: '안전지대',
                        },
                        {
                          id: crypto.randomUUID(),
                          name: '고블린 숲',
                          level: 'Lv.3-8',
                          description: '초보자 사냥터',
                          type: '사냥터',
                        },
                        {
                          id: crypto.randomUUID(),
                          name: '어둠의 동굴',
                          level: 'Lv.8-15',
                          description: '중급 던전',
                          type: '던전',
                        },
                        {
                          id: crypto.randomUUID(),
                          name: '왕의 성',
                          level: 'Lv.20+',
                          description: '최종 보스 지역',
                          type: '보스',
                        },
                        {
                          id: crypto.randomUUID(),
                          name: '상인 거리',
                          level: '모든 레벨',
                          description: '아이템 거래',
                          type: '상점',
                        },
                        {
                          id: crypto.randomUUID(),
                          name: 'PvP 아레나',
                          level: 'Lv.10+',
                          description: '플레이어 대전',
                          type: 'PvP',
                        },
                      ].map(area => (
                        <Card key={area.id} className="border-border/50 hover:border-primary/50 transition-colors">
                          <CardContent className="p-4">
                            <div className="flex items-start justify-between mb-2">
                              <h3 className="font-semibold">{area.name}</h3>
                              <Badge variant="outline" className="text-xs">
                                {area.type}
                              </Badge>
                            </div>
                            <p className="text-sm text-muted-foreground mb-2">{area.description}</p>
                            <p className="text-xs font-medium text-primary">{area.level}</p>
                          </CardContent>
                        </Card>
                      ))}
                    </div>
                  </CardContent>
                </Card>
              </TabsContent>

              <TabsContent value="weapons" className="space-y-6">
                <div className="grid md:grid-cols-2 gap-6">
                  {[
                    {
                      id: crypto.randomUUID(),
                      category: '근접 무기',
                      icon: Sword,
                      weapons: [
                        { name: '한손검', damage: '중', speed: '빠름', special: '균형잡힌 성능' },
                        { name: '양손검', damage: '높음', speed: '보통', special: '강력한 일격' },
                        { name: '단검', damage: '낮음', speed: '매우빠름', special: '연속 공격' },
                        { name: '도끼', damage: '매우높음', speed: '느림', special: '방어구 관통' },
                      ],
                    },
                    {
                      id: crypto.randomUUID(),
                      category: '원거리 무기',
                      icon: Target,
                      weapons: [
                        { name: '활', damage: '중', speed: '빠름', special: '정확한 조준' },
                        { name: '석궁', damage: '높음', speed: '보통', special: '관통 데미지' },
                        { name: '마법봉', damage: '높음', speed: '보통', special: '원소 속성' },
                        { name: '투척 무기', damage: '낮음', speed: '빠름', special: '연속 투척' },
                      ],
                    },
                  ].map(category => (
                    <Card key={category.id} className="card-gaming border-border/50">
                      <CardHeader>
                        <CardTitle className="flex items-center gap-2">
                          <category.icon className="w-5 h-5 text-primary" />
                          {category.category}
                        </CardTitle>
                      </CardHeader>
                      <CardContent className="space-y-4">
                        {category.weapons.map(weapon => (
                          <div key={weapon.name} className="p-3 bg-muted/30 rounded-lg border border-border/50">
                            <div className="flex items-center justify-between mb-2">
                              <h4 className="font-medium">{weapon.name}</h4>
                              <div className="flex gap-2">
                                <Badge variant="outline" className="text-xs">
                                  {weapon.damage}
                                </Badge>
                                <Badge variant="outline" className="text-xs">
                                  {weapon.speed}
                                </Badge>
                              </div>
                            </div>
                            <p className="text-sm text-muted-foreground">{weapon.special}</p>
                          </div>
                        ))}
                      </CardContent>
                    </Card>
                  ))}
                </div>
              </TabsContent>

              <TabsContent value="skills" className="space-y-6">
                <Card className="card-gaming border-border/50">
                  <CardHeader>
                    <CardTitle className="flex items-center gap-2">
                      <TreePine className="w-5 h-5 text-primary" />
                      스킬 트리 시뮬레이션
                    </CardTitle>
                  </CardHeader>
                  <CardContent>
                    <div className="grid lg:grid-cols-3 gap-6">
                      {[
                        {
                          id: crypto.randomUUID(),
                          tree: '전사',
                          icon: Shield,
                          color: 'destructive',
                          skills: [
                            { name: '강인함', level: '1', desc: '체력 +20%' },
                            { name: '방어 숙련', level: '5', desc: '방어력 +15%' },
                            { name: '분노', level: '10', desc: '공격력 +30% (10초)' },
                            { name: '불굴', level: '15', desc: '치명타 저항 +25%' },
                            { name: '최후의 일격', level: '20', desc: '체력 20% 이하시 데미지 +50%' },
                          ],
                        },
                        {
                          id: crypto.randomUUID(),
                          tree: '도적',
                          icon: Zap,
                          color: 'primary',
                          skills: [
                            { name: '민첩', level: '1', desc: '이동속도 +15%' },
                            { name: '은신', level: '5', desc: '투명화 (5초)' },
                            { name: '독 칠', level: '10', desc: '공격시 독 데미지' },
                            { name: '치명타 숙련', level: '15', desc: '치명타 확률 +20%' },
                            { name: '그림자 분신', level: '20', desc: '분신 소환 (15초)' },
                          ],
                        },
                        {
                          id: crypto.randomUUID(),
                          tree: '마법사',
                          icon: Star,
                          color: 'accent',
                          skills: [
                            { name: '마나 집중', level: '1', desc: '마나 +30%' },
                            { name: '화염구', level: '5', desc: '화염 마법 데미지' },
                            { name: '빙결', level: '10', desc: '적 이동속도 감소' },
                            { name: '순간이동', level: '15', desc: '즉시 위치 이동' },
                            { name: '메테오', level: '20', desc: '광범위 마법 공격' },
                          ],
                        },
                      ].map(tree => (
                        <Card key={tree.id} className="border-border/50">
                          <CardHeader className="pb-3">
                            <CardTitle className="flex items-center gap-2 text-lg">
                              <tree.icon className="w-5 h-5 text-primary" />
                              {tree.tree}
                            </CardTitle>
                          </CardHeader>
                          <CardContent className="space-y-3">
                            {tree.skills.map(skill => (
                              <div key={skill.name + skill.level} className="group cursor-pointer">
                                <div className="flex items-center gap-3 p-2 rounded-lg hover:bg-muted/30 transition-colors">
                                  <div className="w-8 h-8 rounded-full bg-primary/20 flex items-center justify-center text-sm font-medium">
                                    {skill.level}
                                  </div>
                                  <div className="flex-1">
                                    <p className="font-medium text-sm group-hover:text-primary transition-colors">
                                      {skill.name}
                                    </p>
                                    <p className="text-xs text-muted-foreground">{skill.desc}</p>
                                  </div>
                                </div>
                              </div>
                            ))}
                          </CardContent>
                        </Card>
                      ))}
                    </div>
                  </CardContent>
                </Card>
              </TabsContent>

              <TabsContent value="combat" className="space-y-6">
                <div className="grid gap-6">
                  <Card className="card-gaming border-border/50">
                    <CardHeader>
                      <CardTitle className="flex items-center gap-2">
                        <Target className="w-5 h-5 text-primary" />
                        전투 기본 가이드
                      </CardTitle>
                    </CardHeader>
                    <CardContent className="grid md:grid-cols-2 gap-6">
                      <div className="space-y-4">
                        <h3 className="text-lg font-semibold">기본 전투 시스템</h3>
                        <div className="space-y-3">
                          {[
                            { id: 0, title: '일반 공격', desc: '좌클릭으로 기본 공격 실행' },
                            { id: 1, title: '강공격', desc: '우클릭으로 강력한 공격' },
                            { id: 2, title: '방어', desc: 'Shift 키로 방어 자세' },
                            { id: 3, title: '회피', desc: 'Space 키로 회피 굴리기' },
                            { id: 4, title: '스킬', desc: '1-4 키로 스킬 사용' },
                          ].map(combat => (
                            <div
                              key={combat.id + combat.title}
                              className="flex items-start gap-3 p-3 bg-muted/30 rounded-lg"
                            >
                              <PlayCircle className="w-5 h-5 text-primary mt-0.5" />
                              <div>
                                <p className="font-medium text-sm">{combat.title}</p>
                                <p className="text-xs text-muted-foreground">{combat.desc}</p>
                              </div>
                            </div>
                          ))}
                        </div>
                      </div>

                      <div className="space-y-4">
                        <h3 className="text-lg font-semibold">전투 팁</h3>
                        <div className="space-y-3">
                          {[
                            { id: 0, text: '적의 패턴을 파악하여 회피 타이밍을 익히세요' },
                            { id: 1, text: '강공격은 느리지만 방어를 뚫을 수 있습니다' },
                            { id: 2, text: '연속 공격보다는 적절한 타이밍이 중요합니다' },
                            { id: 3, text: '체력이 낮을 때는 무리하지 말고 회복하세요' },
                            { id: 4, text: '지형을 활용하여 전술적 우위를 점하세요' },
                          ].map(tip => (
                            <div key={tip.id + tip.text} className="flex items-start gap-3 p-3 bg-muted/30 rounded-lg">
                              <ArrowRight className="w-4 h-4 text-primary mt-1" />
                              <p className="text-sm">{tip.text}</p>
                            </div>
                          ))}
                        </div>
                      </div>
                    </CardContent>
                  </Card>

                  <div className="grid md:grid-cols-3 gap-4">
                    {[
                      {
                        id: 0,
                        title: 'PvE 전투',
                        icon: Users,
                        tips: ['몬스터별 약점 파악', '효율적인 사냥 루트', '경험치 최적화', '아이템 파밍 가이드'],
                      },
                      {
                        id: 1,
                        title: 'PvP 전투',
                        icon: Target,
                        tips: ['상대 클래스 대응법', '심리전 활용', '지형 활용 전술', '연계 공격 패턴'],
                      },
                      {
                        id: 2,
                        title: '던전 공략',
                        icon: Shield,
                        tips: ['파티 구성 가이드', '보스 패턴 분석', '역할 분담', '아이템 분배'],
                      },
                    ].map(section => (
                      <Card
                        key={section.id + section.title}
                        className="border-border/50 hover:border-primary/50 transition-colors"
                      >
                        <CardHeader className="pb-3">
                          <CardTitle className="flex items-center gap-2 text-lg">
                            <section.icon className="w-5 h-5 text-primary" />
                            {section.title}
                          </CardTitle>
                        </CardHeader>
                        <CardContent>
                          <div className="space-y-2">
                            {section.tips.map(tip => (
                              <div key={tip} className="flex items-center gap-2 text-sm">
                                <div className="w-1.5 h-1.5 bg-primary rounded-full" />
                                {tip}
                              </div>
                            ))}
                          </div>
                          <Button size="sm" variant="outline" className="w-full mt-4">
                            자세히 보기
                          </Button>
                        </CardContent>
                      </Card>
                    ))}
                  </div>
                </div>
              </TabsContent>
            </Tabs>
          </div>
        </section>
      </main>
      <Footer />
    </div>
  )
}
