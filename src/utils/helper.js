import {FlatList, SafeAreaView, Text} from 'react-native';
import React, {useMemo} from 'react';

export const formatSubjectRows = data => {
  if (!data || !data?.length) return [];
  const numOfSubRows = Math.ceil(data?.length / 4);
  let returnData = [];
  let i = 0;
  let j = 4;
  const rows = Array(numOfSubRows);
  for (const row of rows) {
    returnData.push(data.slice(i, j));
    i = j;
    j += 4;
  }
  return returnData;
};

export const formatList = (list, type) => {
  if (type === 'pastQuestion') {
    return list?.map(item => item?.pastQuestionTypes[0]);
  }

  return formatSubjectRows(list);
};

export const VirtualizedView = React.memo(props => {
  return (
    <SafeAreaView
      style={{
        width: '98%',
      }}>
      <FlatList
        {...props}
        data={[]}
        ListEmptyComponent={null}
        showsVerticalScrollIndicator={false}
        keyExtractor={() => 'dummy'}
        renderItem={null}
        ListHeaderComponent={useMemo(
          () => (
            <React.Fragment>{props.children}</React.Fragment>
          ),
          [props],
        )}
      />
    </SafeAreaView>
  );
});

export const CapitalizeFirstLetter = value => {
  const str = value?.charAt(0)?.toUpperCase() + value?.slice(1);
  return str;
};

export const SubHeading = ({head}) => {
  return (
    <Text
      style={{
        color: '#333',
        fontSize: 24,
        fontWeight: '700',
        marginVertical: 10,
      }}>
      {head}
    </Text>
  );
};

export const decodeEntities = (function () {
  function shreding(data) {
    if (data && typeof data === 'string') {
      data = data.replace(/<script[^>]*>([\S\s]*?)<\/script>/gim, '');
      data = data.replace(/<\/?\w(?:[^"'>]|"[^"]*"|'[^']*')*>/gim, '');
      data = data.replace(/&nbsp;| .&nbsp; /gim, '');
      data = data.replace(/&rsquo;/gim, "'");
    }
    return data;
  }
  return shreding || 'undefined';
})();

export const SentenceCase = str => {
  return str.charAt(0).toUpperCase() + str.slice(1);
};
