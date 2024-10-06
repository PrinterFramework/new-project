import Badge from 'components/ui/badge'
import Button from 'components/ui/button'
import Card from 'components/ui/card'
import Colors from 'components/ui/colors'
import Dimensions from 'components/ui/dimensions'
import Footer from 'components/ui/footer'
import Form from 'components/ui/form'
import Header from 'components/ui/header'
import Input from 'components/ui/input'
import Navigation from 'components/ui/navigation'
import Panel from 'components/ui/panel'
import Popup from 'components/ui/popup'
import Select from 'components/ui/select'
import Table from 'components/ui/table'
import Textarea from 'components/ui/textarea'
import Link from 'next/link'

export default function UiPage() {
  return (
    <div className="container page page-ui">
      <div className="page-ui-header">
        <div className="page-ui-header-brand">
          <img src="/assets/img/logo.png" alt="Renown Logo" />
          <h1>Just Print It, UI Kit</h1>
        </div>
        <Link href="/" className="button">
          Go Back
        </Link>
      </div>
      <Colors />
      <Dimensions />
      <Button />
      <Input />
      <Textarea />
      <Select />
      <Badge />
      <Popup />
      <Card />
      <Panel />
      <Navigation />
      <Table />
      <Form />
      <Header />
      <Footer />
    </div>
  )
}
