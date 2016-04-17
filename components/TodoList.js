import React, {
  ListView,
  StyleSheet,
  Text,
  View,
} from 'react-native';

const todoItems = [
  'Lorem ipsum dolor sit amet, consectetur adipiscing elit',
  'Integer non risus eu justo dignissim dignissim',
  'Aenean pharetra libero placerat nisi scelerisque, sed semper arcu porttitor',
  'Nunc id felis condimentum, eleifend nisl ac, tempus ex',
  'Vivamus ac sapien quis odio aliquam sollicitudin non ac justo',
  'Phasellus vel purus ac magna tristique sodales',
  'Sed pellentesque dolor sed tellus posuere tincidunt',
  'Donec elementum quam a orci mollis, sed laoreet ligula lacinia',
  'Proin ac mi pellentesque, cursus elit at, bibendum purus',
  'Ut a libero sed elit varius elementum in eget tortor',
  'Donec rhoncus lectus in tincidunt accumsan',
  'Etiam sed lectus et est tristique dignissim vitae non nunc',
  'Proin non mi varius, interdum justo et, mollis orci',
  'Phasellus at metus sollicitudin, porta est ac, lobortis velit',
  'Sed vitae tortor pulvinar, tempus turpis a, fringilla felis',
  'Pellentesque vulputate ligula nec nisl pellentesque, vitae gravida odio consectetur',
  'Proin vel sem pellentesque, rutrum erat sit amet, sagittis nisl',
];

export default class TodoList extends React.Component {
  componentWillMount() {
    this.renderRow = this.renderRow.bind(this);
    this.styles = StyleSheet.create({
      container: {
        flex: 1,
        marginTop: 20,
      },
      item: {
        borderBottomColor: 'lightgray',
        borderBottomWidth: 1,
        padding: 16,
      },
      itemText: {
        fontSize: 16,
      },
    });
  }

  renderRow(row) {
    return (<View style={this.styles.item}>
      <Text style={this.styles.itemText}>{row}</Text>
    </View>);
  }

  render() {
    const ds = new ListView.DataSource({
      rowHasChanged: (r, s) => r !== s,
    });

    return (<ListView
      dataSource={ds.cloneWithRows(todoItems)}
      renderRow={this.renderRow}
      style={this.styles.container}
    />);
  }
}
